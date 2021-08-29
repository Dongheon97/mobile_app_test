import cv2
import numpy as np

def reshape(input_gray):
    w, h = gray.shape
    print("width: ", w)
    print("height: ", h)
    
    for i in range(w):
        if(input_gray[i][0] != 0):
            w_start = i
            break
    for j in range(h, 0, -1):
        if(input_gray[w][h] != 0):
            w_end = j
            break
    
    dst = src[w_start:w_end, :]
    
    return dst

def main():
    cap = cv2.VideoCapture(0)
    
    # 해상도 변경
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    #cap.set(cv2.CAP_PROP_FPS, 60)

    ret, src = cap.read()
    gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
    
    # cutting image
    dst = reshape(gray)
    
    cv2.imshow("dst", dst)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    '''
    cv2.imshow("Capture", frame)
    cv2.imshow("gray", gray)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    '''

if __name__ == '__main__':
    main()
