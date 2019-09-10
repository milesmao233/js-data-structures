// 链表的快速排序
/* 
思路： 
    两个指针： a,b， a先走，b慢走
        b指针左侧的，小于基础元素
        a、b之间的，大于基准元素
        开始从头指针遍历，头元素是基础元素，a和b开始移动
            a指向的元素,如果小于基础元素，和b的下一格换一下位置，b移动至下一格
            a指向的元素,如果大于基础元素，那么b不动
            a移动到最后，基准元素移动到b所在的位置
            （这样就完成了基准元素在中间，左边小于它，右边大于它）
        用递归完成左边和右边
*/

// 交换两个节点的值
let swap = (a, b) => {
    let tmp = a.element
    a.element = b.element
    b.element = tmp
}

// 寻找基准元素的节点
let partion = (begin, end) => {
    let pivot = begin.element
    let b = begin
    let a = begin.next
    while (a !== end) {
        if (a.element < pivot) {
            b = b.next
            if (a !== b) {
                swap(a, b)
            }
        }
        a = a.next
    }
    // a循环结束让基准元素跑到中间去
    swap(b, begin)
    return b
}

export default function quickSort(begin, end) {
    if (begin !== end) {
        let part = partion(begin, end)
        sort(begin, part)
        sort(part.next, end)
    }
}

// test
// import LinkedList from '../singly-linked-list'
// const a = new LinkedList()
// let b = a.setupListFromArray([5, 2, 4, 3, 1])

// quickSort(b)
