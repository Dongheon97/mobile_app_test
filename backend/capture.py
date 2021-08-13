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

