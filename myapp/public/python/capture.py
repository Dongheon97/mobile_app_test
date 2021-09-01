import cv2

# video file path
vidcap = cv2.VideoCapture('video/0.mp4')

count = 0

while(vidcap.isOpened()):
    ret, image = vidcap.read()
    
    if(int(vidcap.get(1)) % 30 == 0):
        print('Saved frame number : ' + str(int(vidcap.get(1))))

        cv2.imwrite('video/capture/%d.PNG' % count, image)
        count += 1

vidcap.release()