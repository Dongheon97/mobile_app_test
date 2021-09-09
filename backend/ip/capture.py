import cv2

def main(path):
    # video file path
    vidcap = cv2.VideoCapture(path)
    frame = 0
    get_image_count = 0

    while(vidcap.isOpened()):
        ret, image = vidcap.read()
    
        if(int(vidcap.get(1)) % 3 == 0):
            print('Saved frame number : ' + str(int(vidcap.get(1))))

            cv2.imwrite('video/capture/%d.PNG' % get_image_count, image)
            get_image_count += 1
            
        # check end of Video
        frame += 1
        if(frame > 2500):
            break

    vidcap.release()

if __name__ == '__main__':
    path = 'video/0.mp4'
    main(path)