var isValidBST = function(root) {
    if (!root) return true
    if (!root.left && !root.right) return true
    if (root.left == null) {
        return root.right.val > root.val && isValidBST(root.right)
    } else if (root.right == null) {
        return root.left.val < root.val && isValidBST(root.left)
    }
    return (
        root.right.val > root.val &&
        root.left.val < root.val &&
        isValidBST(root.right) &&
        isValidBST(root.left)
    )
}

var isValidBST = function(root) {
    if (!root.left && !root.right) {
        return true
    } else if (
        (root.left && root.left.val > root.val) ||
        (root.right && root.right.val < root.val)
    ) {
        return false
    } else {
        return isValidBST(root.left) && isValidBST(root.left)
    }
}
