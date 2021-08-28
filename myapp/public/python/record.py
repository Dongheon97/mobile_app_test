import cv2
import time
import asyncio
import os

cap = cv2.VideoCapture(0)
cap.set(3, 720) # 윈도우 크기
cap.set(4, 1280)
fc = 30.0
codec = cv2.VideoWriter_fourcc(*'mp4v')
    
# cutting rest of images
ret, src = cap.read()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

h, w = gray.shape
w_start = 0
w_end = 0
for i in range(w):
    if (gray[0][i] != 0):
        w_start=i
        break
for j in range(w):
    if (gray[h-1][w-1-j] != 0):
        w_end = w-1-j
        break
# Get start time
start = time.time()

# file name check
current = 0
next = 0
path = '/home/kodo/dongheon/mobile_app_test/myapp/video/'+str(current)+'.mp4'
while(os.path.isfile(path)):
    current += 1
    next += 1
    path = '/home/kodo/dongheon/mobile_app_test/myapp/video/'+str(current)+'.mp4'

# Change : destination of file path
out = cv2.VideoWriter(path, codec, fc, (w_end-w_start, h))
while(cap.isOpened() or current < next):
    print(time.time()-start)
    if (time.time()-start > 70): # 시간이 바뀌면 영상파일을 새로 만든다. (시간으로 감지)
        start = time.time()
        current+=1
        print('새로운 파일 저장 시작')
        break
    
    ret, frame = cap.read()
    dst = frame[:, w_start+1:w_end+1]
    #frame = cv2.flip(frame,1) # 화면 반전 0: 상하, 1: 좌우
    
    if ret==True:
        cv2.imshow('Record&Save', dst)
        out.write(dst)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    else:
        break

cap.release()
cv2.destroyAllWindows()
