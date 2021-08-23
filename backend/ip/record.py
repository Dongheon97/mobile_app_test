import cv2


cap = cv2.VideoCapture(0)
# 해상도 변경
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 800)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 600)
cap.set(cv2.CAP_PROP_FPS, 60)

# 디스플레이에 맞는 크기 설정하기
ret, src = cap.read()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
fps = cap.get(cv2.CAP_PROP_FPS)

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

fourcc = cv2.VideoWriter_fourcc(*'DIVX')
out = cv2.VideoWriter('./output/output.avi', fourcc, fps, (h, w_end-w_start ))

# streaming
while True:
    ret, frame = cap.read()
    
    # cutting image
    dst = frame[:, w_start+1:w_end+1]
    
    cv2.imshow("video", dst)
    out.write(dst)
    cv2.waitKey(1)

