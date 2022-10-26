import {dataListCommonCheck} from "./common-util.mjs";

/**
 * 元素挪动的方式实现插入
 * @param dataList
 * @returns {*}
 */
export function insertSort(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    //初始0-i 的元素是有序的，i-n的元素是待排序的
    for(let i = 1; i < n; i++){
        // 只有当前元素比最大的有序序列小才需要插入，否则原地不动就行
        if(dataList[i] < dataList[i-1]){  // 这里要用< 才能使算法稳定，否则后面的等值元素就可能出现在前面
            // 先找到第一个比当前元素大的元素，然后插入到他的前面(在这之前需要先把空位置挪出来)
            // 这个也是基于外层的判断的，否则可能找的位置不对,比如当前元素后面有比他小的的时候
            let targetIndex = dataList.findIndex(item => item > dataList[i]) // 这里也一样，要 > 才能使算法稳定，否则后面的等值元素可能出现在前面
            let tmpValue = dataList[i]
            for(let j = i; j > targetIndex; j--){
                dataList[j] = dataList[j-1]
            }
            dataList[targetIndex] = tmpValue
        }
    }
    return dataList
}

/**
 * 利用数组api splice实现插入
 * @param dataList
 * @returns {*}
 */
export function insertSortEx(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    //初始0-i 的元素是有序的，i-n的元素是待排序的
    for(let i = 1; i < n; i++){
        // 只有当前元素比最大的有序序列小才需要插入，否则原地不动就行
        if(dataList[i] < dataList[i-1]){  // 这里要用< 才能使算法稳定，否则后面的等值元素就可能出现在前面
            // 先找到第一个比当前元素大的元素，然后插入到他的前面(在这之前需要先把空位置挪出来)
            // 这个也是基于外层的判断的，否则可能找的位置不对,比如当前元素后面有比他小的的时候
            let targetIndex = dataList.findIndex(item => item > dataList[i]) // 这里也一样，要 > 才能使算法稳定，否则后面的等值元素可能出现在前面
            let tmpValue = dataList[i]
            dataList.splice(i,1) // 删掉当前元素
            dataList.splice(targetIndex,0,tmpValue) // 插入当前元素
        }
    }
    return dataList
}

/**
 * 利用数组api splice实现插入，循环做查找
 * @param dataList
 * @returns {*}
 */
export function insertSortExA(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    //初始0-i 的元素是有序的，i-n的元素是待排序的
    for(let i = 1; i < n; i++){
        // 只有当前元素比最大的有序序列小才需要插入，否则原地不动就行
        if(dataList[i] < dataList[i-1]){  // 这里要用< 才能使算法稳定，否则后面的等值元素就可能出现在前面
            // 先找到第一个比当前元素大的元素，然后插入到他的前面(在这之前需要先把空位置挪出来)
            // 这个也是基于外层的判断的，否则可能找的位置不对,比如当前元素后面有比他小的的时候
            let targetIndex = 0
            for(let j = 0 ; j < i; j++){
                if(dataList[j] > dataList[i]){ // 这里也一样，要 > 才能使算法稳定，否则后面的等值元素可能出现在前面
                    targetIndex = j
                    break
                }
            }
            let tmpValue = dataList[i]
            dataList.splice(i,1) // 删掉当前元素
            dataList.splice(targetIndex,0,tmpValue) // 插入当前元素
        }
    }
    return dataList
}

/**
 * 利用数组api splice实现插入，二分做查找
 * @param dataList
 * @returns {*}
 */
export function insertSortExB(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    //初始0-i 的元素是有序的，i-n的元素是待排序的
    for(let i = 1; i < n; i++){
        // 只有当前元素比最大的有序序列小才需要插入，否则原地不动就行
        if(dataList[i] < dataList[i-1]){  // 这里要用< 才能使算法稳定，否则后面的等值元素就可能出现在前面
            // 先找到第一个比当前元素大的元素，然后插入到他的前面(在这之前需要先把空位置挪出来)
            // 这个也是基于外层的判断的，否则可能找的位置不对,比如当前元素后面有比他小的的时候
            let tmpValue = dataList[i]
            let minIndex = 0, maxIndex = i - 1
            while (minIndex <= maxIndex){
                let middleIndex = (minIndex + maxIndex) >> 1; // 这里通过向右移动一位实现折半（除以二）的效果，比做除法要高效，同时还不用取整，移位不会产生小数
                if(dataList[middleIndex] > tmpValue){ // 中位大就在低区找 // 这里会造成算法不稳定
                    maxIndex = middleIndex - 1
                }else{
                    minIndex = middleIndex + 1
                }
            }

            dataList.splice(i,1) // 删掉当前元素
            dataList.splice(minIndex,0,tmpValue) // 插入当前元素
        }
    }
    return dataList
}

