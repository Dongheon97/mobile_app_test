from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2
import os

def main():
    timeline = []
    
    end_load = []
    start_load = []
    temp_end = 0
    temp_start = 0

    #img_list = sorted(os.listdir('video/capture'))
    img_list = os.listdir('video/capture')
    ps = 0

    for i in range(len(img_list)-1, 0, -1):
        current = i
        previous = i-1
        #print(previous)
        cur_img = cv2.imread('video/capture/' + str(current) + '.PNG', cv2.IMREAD_GRAYSCALE)
        prev_img = cv2.imread('video/capture/' + str(previous) + '.PNG', cv2.IMREAD_GRAYSCALE)
        
        # SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)
        s = ssim(cur_img, prev_img)

        end_time = float(current+1)/10
        start_time = float(current)/10

        #print(end_time, "           ", s, "                 ", ps)

        if (s < 0.95):
            
            if (temp_end == 0):
                temp_end = end_time
                print(temp_end)
                end_load.append(temp_end)
            else:
                if (temp_end-end_time > 5):
                    temp_end = 0
            #print("SSIM : %.2f, Time : %.1f" %(s, start_time))
        
        else:
            if(ps < 0.95):
                #print("                  ", start_time)
                if(temp_start - start_time):
                    temp_start = start_time
        ps = s
    print(end_load)

    

if __name__ == '__main__':
    main()
    