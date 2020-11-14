/**
 * 封状工具类函数：
 */

 //节流函数的封状：
export const debounce = (fn, delay) => {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}