import React, { useEffect, useState } from "react";
import { plushSVG } from "./resident-portraits.js";
import { RESIDENT_GREETINGS } from "../residents.js";
import { Icon } from "./Icon.jsx";
export function FriendsPanel({
  residents,
  worldRef,
  ready,
  onInspect,
  onEdit,
  notify,
}) {
  const [activities, setActivities] = useState(
    () => worldRef.current?.getResidentActivities() || [],
  );
  useEffect(() => {
    const timer = setInterval(
      () => setActivities(worldRef.current?.getResidentActivities() || []),
      1000,
    );
    return () => clearInterval(timer);
  }, [worldRef]);
  return (
    <>
      <div className="friends-intro">
        <span>☀</span>
        <div>
          <h3>今天，也一起悠閒地生活</h3>
          <p>
            {residents.length}{" "}
            位小夥伴分散在不同小島自由散步，遇到佈景會繞路，靠近朋友時會靠右通過，窄處會等待讓路。偶爾兩兩結伴散步、聊天、盪鞦韆或玩球，也會獨自看風景。點選娃娃，立刻拉近看看牠；也可以打個招呼。
          </p>
        </div>
      </div>
      <div className="residents">
        {residents.map((resident, index) => (
          <article
            className="resident-card"
            data-resident={index}
            data-resident-island={activities[index]?.island}
            key={resident.id || index}
            onClick={(event) => {
              if (
                ready &&
                !event.target.closest("[data-greet], [data-edit-resident]")
              )
                onInspect(index);
            }}
          >
            <button
              className={`resident-art resident-${index}`}
              data-watch-resident={index}
              aria-label={`放大查看${resident.name}`}
              disabled={!ready}
            >
              <span dangerouslySetInnerHTML={{ __html: plushSVG(resident) }} />
              <span className="resident-view-hint">放大看看 ↗</span>
            </button>
            <span className="resident-status">
              <i /> {activities[index]?.label || "在島上休息"}
            </span>
            <h3>{resident.name}</h3>
            <p>{resident.role}</p>
            <button
              className="secondary-button resident-edit-button"
              data-edit-resident={index}
              disabled={!ready}
              onClick={() => onEdit(index)}
            >
              調整造型
            </button>
            <button
              className="secondary-button"
              data-greet={index}
              onClick={() => {
                notify(`${resident.name}：${RESIDENT_GREETINGS[index]}`);
                worldRef.current?.greet(index);
              }}
            >
              打個招呼 <Icon name="heart" />
            </button>
          </article>
        ))}
      </div>
      <div className="soft-notice">
        <Icon name="heart" /> 這裡的每一位居民，都在等你回家。
      </div>
    </>
  );
}
