import cv2
import time

cap = cv2.VideoCapture(0)
#cap.set(3, 720) # 윈도우 크기
#cap.set(4, 1280)
fc = 30.0
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 800)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 600)
cap.set(cv2.CAP_PROP_FPS, fc)
codec = cv2.VideoWriter_fourcc(*'mp4v')

ret, src = cap.read()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
h, w = gray.shape
print(gray.shape)
w_start=0
w_end=0
for i in range(w):
    if (gray[0][i]!=0):
        w_start=i
        break
for j in range(w):
    if (gray[h-1][w-1-j]!=0):
        w_end = w-1-j
        break

start = time.time()

count = 0

#out = cv2.VideoWriter('./video/'+str(count)+'.mp4', codec, fc, (int(cap.get(3)), int(cap.get(4))))
out = cv2.VideoWriter('./video/'+str(count)+'.mp4', codec, fc, ((w_end-w_start), h))
while(cap.isOpened() or count==0):
    print(time.time()-start)
    if (time.time()-start > 75): # 시간이 바뀌면 영상파일을 새로 만든다. (시간으로 감지)
        start = time.time()
        count+=1
        print('새로운 파일 저장 시작')
#out = cv2.VideoWriter(time.strftime('./video/%Y-%m-%d-%H-%M',time.localtime(time.time()))+'.mp4', codec, fc, (int(cap.get(3)), int(cap.get(4))))
        out = cv2.VideoWriter(count+'.mp4', codec, fc, (int(cap.get(3)), int(cap.get(4))))
        print('파일 생성:',time.strftime('./video/%Y-%m-%d %H- %M',time.localtime(time.time()))+'.mp4')
    ret, frame = cap.read()
    #frame = cv2.flip(frame,1) # 화면 반전 0: 상하, 1: 좌우
    
    dst = frame[:, w_start+1:w_end+1]
    print(w_start)
    print(w_end)
    print(dst.shape)
    if ret==True:
        cv2.imshow('Record&Save', dst)
        out.write(dst)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    else:
        break
    
cap.release()
cv2.destroyAllWindows()

