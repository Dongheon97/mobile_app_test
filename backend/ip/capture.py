'''
import cv2

#url = "usb-0000:00:14.0-3.1"
#cap = cv2.VideoCapture(url) <S-F12>V4L2:/dev/video0
cap = cv2.VideoCapture(0)

# 해상도 변경
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
cap.set(cv2.CAP_PROP_FPS, 60)

while True:
	ret, frame = cap.read()
	cv2.imshow("video", frame)
	cv2.waitKey(1)
'''

import cv2

cap = cv2.VideoCapture(0)
# 해상도 변경
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
cap.set(cv2.CAP_PROP_FPS, 60)

# 디스플레이에 맞는 크기 설정하기
ret, src = cap.read()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

h, w = gray.shape
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
    dst = frame[:, w_start:w_end]
    
    cv2.imshow("video", dst)
    cv2.waitKey(1)

