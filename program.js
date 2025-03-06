A=[[1,2,3],[4,5,6],[7,8,9]];
let ans=""
N=A.length;
for(i=N-1;i>=0;--i)
    ans+=A[i][0]+" "
for(j=1;j<N;++j)
    ans+=A[0][j]+" "
for(i=1;i<N;++i)
    ans+=A[i][N-1]+" "
for(j=N-2;j>0;--j)
    ans+=A[N-1][j]
console.log(ans)