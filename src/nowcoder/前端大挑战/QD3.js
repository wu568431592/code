function commonParentNode(oNode1, oNode2) {
  if(oNode1.contains(oNode2)){
      return oNode1
  }else if (oNode2.contains(oNode1)){
       return oNode2
  }else{
      return commonParentNode(oNode1.parentNode, oNode2)
  }
}