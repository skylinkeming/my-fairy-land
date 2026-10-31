import {normalizeShape,RESIDENT_SHAPE_IDS} from '../resident-shape.js';

export function shapeRows(rows) {
  const settings={},versions={};
  for(const row of rows||[])if(RESIDENT_SHAPE_IDS.includes(row.resident_id)) {
    settings[row.resident_id]=normalizeShape(row.shape);
    versions[row.resident_id]=row.version;
  }
  return {settings,versions};
}
export function createShapesApi(client,familyId) {
  const result=async request=>{const {data,error}=await request;if(error)throw error;return shapeRows(data);};
  return {
    list:()=>result(client.rpc('island_list_resident_shapes',{p_family_id:familyId})),
    save:(settings,versions)=>result(client.rpc('island_save_resident_shapes',{
      p_family_id:familyId,p_changes:Object.entries(settings).map(([resident_id,shape])=>({resident_id,shape:normalizeShape(shape),version:versions[resident_id]??null})),
    })),
  };
}
export function shapeError(error) {
  if(error?.code==='PGRST202'||error?.code==='42P01')return '家庭的雲端造型儲存尚未設定，請聯絡管理者套用娃娃設定資料庫更新。本機設定仍保留，可先匯出備份。';
  if(String(error?.message).includes('shape_conflict'))return '這隻娃娃的造型已被家人更新。你的調整尚未儲存；可先匯出備份，再按「還原未儲存調整」載入最新造型。';
  if(error?.code==='42501')return '目前沒有這個家庭的存取權限，請重新整理家庭列表。';
  return '雲端儲存未完成，請檢查網路後再試。你的調整仍在編輯器中，可匯出備份。';
}
