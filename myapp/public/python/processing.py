<<<<<<< Updated upstream
from skimage.measure import compare_ssim as ssim
=======
from skimage.metrics import structural_similarity as ssim 
>>>>>>> Stashed changes
import cv2
import os

def capture(path):
    if(not os.path.isdir(path+'/capture')):
        os.mkdir(path + '/capture')

    print('start image capturing process\n')
    path = path + '/0.avi'
    # video file path
    vidcap = cv2.VideoCapture(path)

    image_count = 0
    count = 0

    continuing = True
    while(continuing):
        ret, image = vidcap.read()
    
        if(int(vidcap.get(1)) % 3 == 0):
            cv2.imwrite('video/capture/%d.PNG' %count, image)
            count += 1
        image_count += 1
        if(image_count == 3390):
            continuing = False
    vidcap.release()
    os.remove(path)
    print('end image capturing process')

def event_time(path, timeline):
    path = path + '/capture'
    print('start image similiarity checking process\n')
    
    #img_list = sorted(os.listdir('video/capture'))
    img_list = os.listdir('video/capture')
    for i in range(len(img_list)-1, 1, -1):
        current = i-1
        previous = i-2
        cur_img = cv2.imread('video/capture/' + str(current) + '.PNG', cv2.IMREAD_GRAYSCALE)
        prev_img = cv2.imread('video/capture/' + str(previous) + '.PNG', cv2.IMREAD_GRAYSCALE)
        
        # SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)
        s = ssim(cur_img, prev_img)

        event = float(previous)/10

        if (s < 0.95):
            timeline.append(event)

    print(timeline)
    print('end image similarity checking process')
    removeAllFile(path)
    
    return timeline

def filter_event(timeline):
    print('start data filtering process\n')
    timeline = timeline[1:]                         # 맨 마지막 이벤트 버림
    filtered = []
    time_tuple = []
    end = timeline[0]
    temp = 0
    start = 0
    threshold = 6
    time_tuple.append(end)
    for time in timeline:
        temp = time
        if(end == temp):
            continue
        elif(end-temp < threshold):                 # threshold : 6
            start = temp
            length = len(timeline)
            if(start == timeline[length-1]):        # dealing last event 
                time_tuple.append(start)
                filtered.append(time_tuple)
            continue
        else:
            time_tuple.append(start)
            filtered.append(time_tuple)
            end = temp
            time_tuple = []
            time_tuple.append(end)
    print('end data filtering process\n')
    #print(filtered)
    #print(len(filtered))
    return filtered

def removeAllFile(path):
    print('start captured image removing process\n')
    if os.path.exists(path):
        for file in os.scandir(path):
            os.remove(file.path)
    else:
        print('Directory Not Found!')
    print('end captured image removing process')

def list2csv(path, data):
    path = path + '/tested.csv'
    output = list(reversed(data))
    if(os.path.isfile(path)):
        f = open(path, 'a')
    else:
        f = open(path, 'w')
    for i in range(len(output)):
        num = 'test' + str(int(i+1))
        sub = output[i][0] - output[i][1]
        f.write((num) + ','+ str(sub) + ',' + str(output[i][1]) + ',' + str(output[i][0]) + '\n')
    f.write('\n')
    f.close()


def main():
    path = 'video'
    timeline = []
    capture(path)
    data = filter_event(event_time(path, timeline))
    list2csv(path, data)
   
if __name__ == "__main__":
    main()