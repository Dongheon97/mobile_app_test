import cv2

cap = cv2.VideoCapture(0)
# 해상도 변경
fc=30.0
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 800)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 600)
cap.set(cv2.CAP_PROP_FPS, fc)

# 디스플레이에 맞는 크기 설정하기
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


codec = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('./video/test.mp4', codec, fc, (w_end-w_start, h))
# streaming
while True:
    ret, frame = cap.read()
    
    # cutting image
    dst = frame[:, w_start+1:w_end+1]
    print(dst.shape)
    out.write(dst)
    cv2.imshow("video", dst)
    cv2.waitKey(1)

