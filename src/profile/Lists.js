import React, { useState, useEffect } from 'react';

const Listss = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    // 使用 URLSearchParams 來解析 URL 中的參數
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlId = urlSearchParams.get('id');

    // 如果 URL 中包含 'id' 參數，將其轉換為數字並設定為 id 狀態
    if (urlId) {
      setId(Number(urlId));
    }
  }, []);

  // 在這裡使用 id 來發送 API 請求或進行其他相關操作

  return (
    <div>
      {/* 在這裡渲染根據 URL 中的 id 獲取的資料 */}
      <h2>Lists Component - ID: {id}</h2>
    </div>
  );
};

export default Listss;
