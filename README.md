# Git 내가 쓰려고 정리 하는 ReadMe

  맨날 헷갈리니깐 그냥 한번에 정리해놓자

## git 처음에 연결할 떄 쓸만한 것들

### `git init`
### `git remote add [이름] [url]`

### `git remote -v`
### `git clone [url]`

### `git pull [리모트 저장소 이름임 ㅋ] [브랜치이름]`

### `git checkout -b [브랜치 이름]`

You asked to pull from the remote 'origin', but did not specify       
a branch. Because this is not the default configured remote
for your current branch, you must specify a branch on the command line
=> 
### `git branch -u [리모트 브랜치] [브랜치]`

  -해당 브랜치가 이제 리모트 브랜치를 tracking 시작하게 된다.


src refspec main does not match any
=> pull 없이 push 하는 경어 , 혹은 해당 브런치가 없는 경우

git pull origin master 했는 데 오류 문이 아래라면 
fatal: refusing to merge unrelated histories
=>
### `git pull origin master --allow-unrelated-historie`

