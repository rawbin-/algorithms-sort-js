import {dataListCommonCheck} from "./common-util.mjs";

/**
 * 选择排序
 * @param dataList
 * @returns {*}
 */
export function selectSort(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    for(let i = 0; i < n; i++){
        let minElIndex = i;
        for(let j = i + 1; j < n; j++){
            if(dataList[minElIndex] > dataList[j]){
                minElIndex = j; // 这个地方要分号
            }
        }
        [dataList[i],dataList[minElIndex]] = [dataList[minElIndex],dataList[i]]

    }

    return  dataList
}

