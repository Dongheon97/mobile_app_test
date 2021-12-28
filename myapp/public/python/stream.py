import cv2


# 카메라 선택
cap = cv2.VideoCapture(1)
# 해상도 변경
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 760)
cap.set(cv2.CAP_PROP_FPS, 30)

# 디스플레이에 맞는 크기 설정
ret, src = cap.read()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

h, w = gray.shape
print(gray.shape)
w_start = 0
w_end = 0
for i in range(w):
    if (gray[0][i] != 0):
        w_start = i
        break
for j in range(w):
    if (gray[h-1][w-1-j] != 0):
        w_end = w-1-j
        break

# streaming
while True:
    ret, frame = cap.read()
    
    # cutting image
    dst = frame[:, w_start+1:w_end+1]
    #print(dst.shape)
    
    cv2.imshow("video", frame)
    cv2.waitKey(1)

