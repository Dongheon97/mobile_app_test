import cv2
import os
import time

def main(loc):
    # video file path
    experiment = 'test' + str(int(count)) 
    path = loc + experiment
    print(path)
    file_name = path + '.avi'
    print(file_name)
    vidcap = cv2.VideoCapture(file_name)
    frame = 0
    get_image_count = 0


    os.mkdir(path)
    while(vidcap.isOpened()):
        ret, image = vidcap.read()
        if(int(vidcap.get(1)) % 3 == 0):
            print('Saved frame number : ' + str(int(vidcap.get(1))))
            cv2.imwrite((path+'/%d.PNG') % get_image_count, image)
            get_image_count += 1
            
        # check end of Video
        frame += 1
        if(frame > 1800):
            break

    vidcap.release()
        
if __name__ == '__main__':
    loc = '/home/kodo/Desktop/video/'
    count = 0
    while(count < 11):
         main(loc, count)
         time.sleep(5)
