from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2
import os

def main(loc):
    timeline = []
    temp = 0
    path = '/home/kodo/Desktop/video/'+loc
    #img_list = sorted(os.listdir('video/capture'))
    img_list = os.listdir(path)
    ps = 0

    for i in range(len(img_list)-1, 0, -1):
        current = i
        previous = i-1
        #print(previous)
        cur_img = cv2.imread(path + str(current) + '.PNG', cv2.IMREAD_GRAYSCALE)
        prev_img = cv2.imread(path + str(previous) + '.PNG', cv2.IMREAD_GRAYSCALE)
        
        # SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)
        s = ssim(cur_img, prev_img)

        end_time = float(current+1)/10
        start_time = float(current)/10

        #print(end_time, "           ", s, "                 ", ps)

        if (s < 0.95):
            print(end_time)
            #if (end_time - temp > 4.9):
                #print('-----------')
                #temp = end_time
                #timeline.append(temp)
            #else:
                #if (temp-end_time > 4):
                    #temp = 0
            #print("SSIM : %.2f, Time : %.1f" %(s, start_time))
        
        
        ps = s

    print(timeline)

if __name__ == '__main__':
    count = 1
    while(count<11):
        print(count)
        loc = 'test'+str(int(count))+'/'
        main(loc)
        count += 1
