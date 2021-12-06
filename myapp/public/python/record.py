import cv2
import time
import os

def get_frame_size(input_gray):
    h, w = input_gray.shape
    w_start = 0
    w_end = 0
    for i in range(w):
        if (input_gray[0][i] != 0):
            w_start=i
            break
    for j in range(w):
        if (input_gray[h-1][w-1-j] != 0):
            w_end = w-1-j
            break
    return h, w_start, w_end

def main(cap, fc):
    cap.set(3, 768) # 윈도우 크기
    cap.set(4, 1280)
    '''
    try:
        # cutting rest of images
        ret, src = cap.read()
        gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
        h, w_start, w_end = get_frame_size(gray)
    except Exception e:
        print(e)    
    '''
    # Get start time
    start = time.time()
    
    # file name check
    current = 0
    #path = '/home/kodo/dongheon/mobile_app_test/myapp/video/'+str(current)+'.mp4'
    path = 'video/'+str(current)+'.avi'

    if(os.path.isfile(path)):
        os.remove(path)

    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))
    # Change : destination of file path
    #out = cv2.VideoWriter(path, codec, fc, (800, 600))
    out = cv2.VideoWriter(path,cv2.VideoWriter_fourcc('M','J','P','G'), 30, (frame_width,frame_height))
    while(cap.isOpened() or current != 0):
        #print(time.time()-start)
        if (time.time()-start > 170): # 시간이 바뀌면 영상파일을 새로 만든다. (시간으로 감지)    
            start = time.time()
            current+=1
            print('파일 저장 완료')
            break
    
        ret, frame = cap.read()
        #dst = frame[:, w_start+1:w_end+1]
        #frame = cv2.flip(frame,1) # 화면 반전 0: 상하, 1: 좌우
    
        if ret==True:
            #cv2.imshow('Record&Save', frame)
            out.write(frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        else:
            break

    cap.release()
    out.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    cap = cv2.VideoCapture(1)                   # get Video
    #cap.set(3, 600)                             # 윈도우 크기
    #cap.set(4, 800)
    fc = 30.0                                   # Set FPS
    #codec = cv2.VideoWriter_fourcc(*'mp4v')     # mp4 codec 

    main(cap, fc) 
