import os
import cv2

path = os.path.join('img', '8.PNG')
src = cv2.imread(path)

gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
ret, imthres = cv2.threshold(gray, 80, 255, cv2.THRESH_BINARY_INV)


'''
contours, hierarchy = cv2.findContours(imthres, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for contour in contours:
      src = cv2.drawContours(src, [contour], -1, (0, 255, 0), 2)
'''
    
contours, hierarchy = cv2.findContours(imthres, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)

print(hierarchy)
for contour in contours:
      src = cv2.drawContours(src, [contour], -1, (0, 255, 0), 2)
    

cv2.imshow('dst', src)

cv2.waitKey(0)
cv2.destroyAllWindows()
