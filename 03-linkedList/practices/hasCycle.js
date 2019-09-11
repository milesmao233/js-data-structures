// 是否为环状

function isCircle(head) {
    let slow = head
    let fast = head.next

    while (true) {
        if (!fast || !fast.next) {
            return false
        } else if (fast === slow || fast.next === slow) {
            return true
        } else {
            slow = slow.next
            fast = fast.next.next
        }
    }
}
