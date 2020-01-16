### - 流程图

<div class="mermaid">
graph TD
         A-->B
</div>


##### 自上而下  

```
graph TB
A-->B
```

#### 自下而上  

```
graph BT
A-->B
```
#### 从左到右

```
graph LR
A-->B
```
#### 从右到左

```
graph RL
A-->B
```

Example:  

#### 打印机使用说明  

```
graph TB
      A{开始}---B(输入打印份数)
      B-->C[机器运转是否正常]
      C-->|是|D[装订]
      C-->|否|E[纠正错误]
```

线框形状调整
```
graph RL
A[这是直角四方形]
```
```
graph RL
A((这是圆形))
```
```
graph RL
A{这是菱形}
```

箭头调整  

```
graph RL
A[这是菱形]---B[方形]
```
```
graph RL
A[这是菱形]-->B[方形]
```
```
graph RL
A[这是菱形]-->|插入文本|B[方形]
```

