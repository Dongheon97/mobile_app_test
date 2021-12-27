from skimage.measure import compare_ssim as ssim
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
    #os.remove(path)
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
    '''
    timeline = [110.4, 109.9, 109.8, 109.6, 109.5, 109.4, 109.3, 103.9, 103.8, 103.7, \
        103.3, 103.2, 103.1, 102.2, 102.1, 102.0, 94.5, 94.4, 94.3, 94.2, 93.5, 93.4, \
            93.3, 93.2, 93.1, 93.0, 92.9, 92.7, 92.6, 92.5, 92.4, 84.4, 84.3, 84.2, 83.6, \
                83.5, 83.4, 82.3, 82.2, 82.1, 82.0, 81.7, 80.6, 80.0, 79.9, 79.8, 79.6, 71.8, \
                    71.7, 71.6, 71.5, 69.9, 69.8, 69.3, 69.2, 68.3, 68.2, 68.1, 68.0, 66.5, 66.4, \
                        60.3, 60.2, 60.1, 59.0, 53.0, 52.3, 52.2, 45.5, 45.4, 45.3, 38.0, 37.9, 37.8, \
                            31.6, 31.5, 31.4, 25.0, 24.9, 24.8, 24.7, 24.6, 24.5, 24.3, 24.2, 24.1, 17.7, \
                                17.6, 16.7, 16.6, 9.7, 9.6, 9.5, 1.8, 1.7, 1.6]
    filter_event(timeline)
    '''
if __name__ == "__main__":
    main()