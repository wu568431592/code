// 交换两个节点
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp; 
}

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设 结点 i 以下的子堆已经是一个大顶堆，shiftDown函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。后面
// 将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 shiftDown操作，所以就满足了结点 i 以下的子堆已经是一大
// 顶堆
function shiftDown(A, i, len) {
  var left = 2*i+1,
    right = 2*i+2,
    largest = i;   //i为该子树的根节点

  if (left < len && A[left] > A[largest]) {
    largest = left;
  }

  if (right < len && A[right] > A[largest]) {
    largest = right;
  }

  if (largest != i) {  //即上面的if中有一个生效了
    swap(A, i, largest);  //交换最大的为父节点
    shiftDown(A, largest, len);  //交换后，原值arr[i]（往下降了）（索引保存为largest），
    //作为根时，子节点可能比它大，因此要继续调整
  }
}

// 堆排序
function heapSort(A) {
  // 初始化大顶堆，从第一个非叶子结点开始
  for(let i = Math.floor(A.length/2 - 1); i>=0; i--) {
    shiftDown(A, i, A.length);
  }
  // 排序，每一次for循环找出一个当前最大值，数组长度减一
  for(let i = A.length-1; i>0; i--) {
    swap(A, 0, i); // 根节点与最后一个节点交换
    shiftDown(A, 0, i); // 从根节点开始调整，并且最后一个结点已经为当
                        // 前最大值，不需要再参与比较，所以第三个参数
                        // 为 i，即比较到最后一个结点前一个即可
  }
  return A
}

module.exports = heapSort
