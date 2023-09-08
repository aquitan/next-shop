import { CompareItem } from "../compareItem/CompareItem"
import { CompareInfo } from "../compareInfo/CompareInfo"
import { productTest } from "../../../mockData/productsData"


export const CompareWrap = () => {
    return(
        <div>
            <CompareInfo/>
            <div style={{display: 'flex', gap: '20px', overflowX: 'scroll'}}>
                {
                    productTest.map(item => (
                        <CompareItem characteristics={item.characteristics}/>
                    ))
                }
            </div>
        </div>
    )
}