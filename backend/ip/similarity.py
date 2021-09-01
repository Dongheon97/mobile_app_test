from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2
import os

def main():
    #img_list = sorted(os.listdir('video/capture'))
    img_list = os.listdir('video/capture')
    print(img_list)
    
    for i in range(len(img_list), 1, -1):
        current = i
        previous = i-1
        cur_img = cv2.imread('video/capture/' + str(current) + '.PNG', cv2.IMREAD_GRAYSCALE)
        prev_img = cv2.imread('video/capture/' + str(previous) + '.PNG', cv2.IMREAD_GRAYSCALE)
        
        # SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)
        s = ssim(cur_img, prev_img)
        if (s < 0.95):
            time_ = float(current)/10
            
            print("SSIM : %.2f, Time : %.1f" %(s, time_))


if __name__ == '__main__':
    main()