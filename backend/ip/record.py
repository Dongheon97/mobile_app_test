import cv2
import time
import asyncio
import os

def get_image_size(input_gray_image):
    # cutting rest of images
    ret, src = cap.read()
    input_gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

    h, w = input_gray_image.shape
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

    return w_start, w_end, h

def main():
    cap = cv2.VideoCapture(2)
    cap.set(3, 720) # 윈도우 크기
    cap.set(4, 1280)
    fc = 30.0
    codec = cv2.VideoWriter_fourcc(*'mp4v')

    # get image size
    ret, src = cap.read()
    gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY) 
    w_start, w_end, h = get_image_size(gray)

    # Get start time
    start = time.time()

    # file name check
    current = 0
    next = 0
    path = 'video/' +str(current)+'.mp4'
    while(os.path.isfile(path)):
        current += 1
        next += 1
        path = 'video/' +str(current)+'.mp4'

    # Change : destination of file path
    out = cv2.VideoWriter(path, codec, fc, (800, 600))
    while(cap.isOpened() or current < next):
        print(time.time()-start)
        if (time.time()-start > 70): # 시간이 바뀌면 영상파일을 새로 만든다. (시간으로 감지)
            start = time.time()
            current+=1
            print('새로운 파일 저장 시작')
            break
    
        ret, frame = cap.read()
        print(frame.shape)
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


if __name__ == '__main__':
    main()