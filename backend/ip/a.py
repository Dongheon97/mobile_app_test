import cv2
import time

cap = cv2.VideoCapture(0)
cap.set(3, 720) # 윈도우 크기
cap.set(4, 1280)
fc = 30.0
codec = cv2.VideoWriter_fourcc(*'mp4v')

start = time.time()

count = 0

out = cv2.VideoWriter('./video/'+str(count)+'.mp4', codec, fc, (int(cap.get(3)), int(cap.get(4))))
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
    
    if ret==True:
        cv2.imshow('Record&Save', frame)
        out.write(frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    else:
        break
    
cap.release()
cv2.destroyAllWindows()

