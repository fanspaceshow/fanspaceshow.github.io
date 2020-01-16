### - 流程图

<div class="mermaid">
graph TD
         A-->B
</div>


### 自上而下  



<div class="mermaid">
graph TB
A-->B
</div>

### 自下而上  



<div class="mermaid">
graph BT
A-->B
</div>  


#### 从左到右



<div class="mermaid">
graph LR
A-->B
</div>  

### 从右到左



<div class="mermaid">
graph RL
A-->B
</div>

Example:  

### 打印机使用说明  



<div class="mermaid">
graph TB
      A{开始}---B(输入打印份数)
      B-->C[机器运转是否正常]
      C-->|是|D[装订]
      C-->|否|E[纠正错误]
</div>

### 线框形状调整  



<div class="mermaid">
graph RL
A[这是直角四方形]
</div>



<div class="mermaid">
graph RL
A((这是圆形))
</div>



<div class="mermaid">
graph RL
A{这是菱形}
</div>

### 箭头调整  



<div class="mermaid">
graph RL
A[这是菱形]---B[方形]
</div>



<div class="mermaid">
graph RL
A[这是菱形]-->B[方形]
</div>



<div class="mermaid">
graph RL
A[这是菱形]-->|插入文本|B[方形]
</div>

### 脑图

<div class="mermaid">
graph LR
      A{编程语言}-->B(Java)
      A-->C[Python]
      A-->D[NodeJS]
      A-->E[C]
      A-->F[C++]
      A-->G[C#]
      A-->H[sql]
      A-->I[HTML]
      A-->J[css]
</div>