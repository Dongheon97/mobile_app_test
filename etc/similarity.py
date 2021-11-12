from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2
import os

def main(loc):
    timeline = []
    end_load = []
    start_load = []
    temp_end = 0
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
            if (temp_end == 0):
                temp_end = end_time
                end_load.append(temp_end)
            else:
                if (temp_end-end_time > 5):
                    temp_end = 0
            #print("SSIM : %.2f, Time : %.1f" %(s, start_time))
        
        
        else:
            if(ps < 0.95):
                start_load.append(start_time)
                   
        ps = s

    # post processing of start_load	
    temp_lst = []
    for i in range(len(start_load)-1):
        if (i==0 or start_load[i] - start_load[i+1] < 6):
            temp_lst.append(start_load[i])		
    
    for i in range(len(temp_lst)):
        start_load.remove(temp_lst[i])

    try:
        if(len(end_load) == len(start_load)):
            for i in range(len(end_load), 0, -1):
#print(end_load[i-1], "-", start_load[i-1])
                timeline.append(round(end_load[i-1]-start_load[i-1], 2))
    except Exception as e:
        print(e)

    print(end_load)
    print(start_load)
    print(timeline)
    

if __name__ == '__main__':
    count = 1
    while(count<11):
        print(count)
        loc = 'test'+str(int(count))+'/'
        main(loc)
        count += 1
    
