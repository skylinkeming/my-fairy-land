import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { createFrog } from '../src/frog.js';
import { createDinosaur } from '../src/dinosaur.js';
import { applyResidentShape, normalizeShape, parseShapeSettings, serializeShapeSettings } from '../src/resident-shape.js';
const art = {ball(radius, color, x, y, z, parent, scale = [1, 1, 1]) {
  const mesh = new T.Mesh(new T.SphereGeometry(1, 12, 8), new T.MeshBasicMaterial({color}));
  mesh.position.set(x, y, z); mesh.scale.set(...scale.map(value => value * radius)); parent.add(mesh); return mesh;
}};
test('imported shape settings accept known finite values, clamp extremes and reject other formats', () => {
  const imported = parseShapeSettings(JSON.stringify({version: 1, residents: {
    guagua: {headWidth: 100, bodyWidth: -.5, size: '2', eyeY: null, unknown: 999}, unknown: {size: 1},
  }}));
  assert.deepEqual(Object.keys(imported), ['guagua']);
  assert.equal(imported.guagua.headWidth, 1.55);
  assert.equal(imported.guagua.bodyWidth, .65);
  assert.equal(imported.guagua.size, 1);
  assert.equal(imported.guagua.eyeY, 0);
  assert.equal(Object.hasOwn(imported.guagua, 'unknown'), false);
  assert.throws(() => parseShapeSettings('{bad json'));
  assert.throws(() => parseShapeSettings('{"version":2,"residents":{}}'));
  assert.deepEqual(parseShapeSettings(serializeShapeSettings(imported)), imported);
});
for (const [name, create] of [['frog', createFrog], ['dinosaur', createDinosaur]]) {
  test(`${name} shape changes are independent, repeatable and reversible`, () => {
    const resident = create(art), root = resident.g;
    const capture = () => root.children.map(mesh => ({p: mesh.position.toArray().map(n => +n.toFixed(12)), s: mesh.scale.toArray().map(n => +n.toFixed(12))}));
    const original = capture();
    applyResidentShape(root, normalizeShape());
    assert.deepEqual(capture(), original, 'opening an unchanged editor must retain the current model');
    const body = root.children.find(mesh => mesh.userData.shapePart === 'body');
    const bodyScale = body.scale.x;
    applyResidentShape(root, {headWidth: 1.4});
    assert.equal(body.scale.x, bodyScale, 'head edits must not resize the body');
    const edited = capture();
    applyResidentShape(root, {headWidth: 1.4});
    assert.deepEqual(capture(), edited, 'repeated slider updates must not compound transforms');
    applyResidentShape(root, {bodyWidth: 1.5});
    assert.equal(body.scale.x, bodyScale * 1.5);
    applyResidentShape(root, normalizeShape());
    assert.deepEqual(capture(), original, 'reset must restore every part');
    root.traverse(mesh => {mesh.geometry?.dispose(); mesh.material?.dispose();});
    resident.dispose();
  });
}
