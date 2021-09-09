from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2
import os

# video file path
vidcap = cv2.VideoCapture('video/0.mp4')

video_frame = 0
get_image_count = 1

while(vidcap.isOpened()):
    ret, image = vidcap.read()
    
    if(int(vidcap.get(1)) % 3 == 0):
        print('Saved frame number : ' + str(int(vidcap.get(1))))

        cv2.imwrite('video/capture/%d.PNG' % get_image_count, image)
        get_image_count += 1
    
    video_frame += 1
    if(video_frame > 2500):
        break

vidcap.release()

#img_list = os.listdir('video/capture')
#print(img_list)    
    
for i in range(get_image_count, 1, -1):
    current = i
    previous = i-1
    cur_img = cv2.imread('video/capture/' + str(current) + '.PNG', cv2.IMREAD_GRAYSCALE)
    prev_img = cv2.imread('video/capture/' + str(previous) + '.PNG', cv2.IMREAD_GRAYSCALE)

    # calculate image similarity
    # SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)
    s = ssim(cur_img, prev_img)    
    print("SSIM : %.2f" %(s))
