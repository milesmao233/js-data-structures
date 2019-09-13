import quickSort from '../03-linkedList/practices/quickSortList'

var mergeTwoLists = function(l1, l2) {
    const size1 = l1.size()
    const size2 = l2.size()
    let l1_list = l1
    let l2_list = l2

    if (size1 <= size2) {
        //l1 插入到l2中
        for (let i = 0; i < size1; i++) {
            let tmp = l1_list.getElementAt(i)
            l2_list.push(tmp.element)
        }
        quickSort(l2_list.head)
        return l2_list
    } else {
        //l2 插入到l1中
        for (let i = 0; i < size2; i++) {
            let tmp = l2_list.getElementAt(i)
            l1_list.push(tmp.element)
        }
        quickSort(l1_list.head)
        return l1_list
    }
}

export default mergeTwoLists

// test:
// import LinkedList from './03-linkedList/singly-linked-list'
// import mergeTwoLists from './leetcode/021-mergeTwoLists'

// const l1 = new LinkedList().setupListFromArray([5, 2, 4, 3, 1])
// const l2 = new LinkedList().setupListFromArray([3, 1, 4])

// console.log(mergeTwoLists(l1, l2).toString())
