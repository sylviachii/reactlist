import React from 'react';
import { Link } from 'react-router-dom';
import edit from './Edit';
import List from './ProdoctList';


// Usage of the BlueDatePicker component in a parent component or file
function Detil() {
    return (
        
        <div className='test'>
           
            <h1>Detil</h1>
            <div className="list">
                <div className="spacebetween">
                        <div className="">訂單 #123
                        <Link to="/edit"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b64b19ae52437d224de84023d18946ee285ce15a03124a71599a7d9aeda1f1d?"/>
                       </Link> </div>
                        <div className="">待處理</div>
                </div>
                <div className="line"></div>


                <div className="div-6">
                    <div className="div-7">購買人</div>
                    <div className="div-7">配送方式</div>
                </div>
                <div className="div-6">
                    <div className="">張張張</div>
                    <div className="">全家超商</div>
                </div>
            </div>
            
            <div className="list">
            <List/>
            </div>
            <div className="list">
                <h3>配送資訊</h3>
                <div className="line" />
                <div className="spacebetween">
                <div className="listtitle">購買人</div>
                    <div className="listleft">張張張</div>
                </div>
                <div className="spacebetween">
                <div className="listtitle">運費</div>
                    <div className="listleft">200</div>
                </div>
                <div className="spacebetween">
                <div className="listtitle">配送</div>
                    <div className="listleft">全家超商</div>
                </div>
                <div className="spacebetween">
                <div className="listtitle">聯絡電話</div>
                    <div className="listleft">0912345678</div>
                </div>
                <div className="spacebetween">
                <div className="listtitle">地址</div>
                    <div className="address">高雄市新興區七賢一路510號11樓高雄市新興區七賢一路</div>
                </div>
                <div className="spacebetween">
                <div className="listtitle">備註</div>
                    <div className="note">備註資料備註資料備註資料備註資料備註資料備註資料備註資料備註資料備註資料</div>
                </div>

            </div>
            
        </div>

    );
}

export default Detil;


