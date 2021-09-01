from skimage.metrics import structural_similarity as ssim 
import matplotlib.pyplot as plt 
import numpy as np 
import cv2

# MSE = 
# SSIM = (2Ux*Uy + c1)*(2Rxy + c2) / (Ux**2 + Uy**2 + c1)*(Rx**2 + Ry**2 + c2)

def mse(imageA, imageB):
    err = np.sum((imageA.astype("float") - imageB.astype("float"))**2)
    err /= float(imageA.shape[0] * imageB.shape[1])

    return err

def compare_images(imageA, imageB, title):
    # compute the mean squared error and structural similarity
    # index for the images
    m = mse(imageA, imageB)
    s = ssim(imageA, imageB)
    
    # setup the figure
    fig = plt.figure(title)
    plt.suptitle("MSE: %.2f, SSIM: %.2f" % (m, s))

    # show first image
    ax = fig.add_subplot(1, 2, 1)
    plt.imshow(imageA, cmap=plt.cm.gray)
    plt.axis("off")

    # show second image
    ax = fig.add_subplot(1, 2, 2)
    plt.imshow(imageB, cmap=plt.cm.gray)
    plt.axis("off")

    # show the images
    plt.show()

def main():
    first = cv2.imread("video/0.PNG", cv2.IMREAD_GRAYSCALE)
    second = cv2.imread("video/1.PNG", cv2.IMREAD_GRAYSCALE)
    third = cv2.imread("video/2.PNG", cv2.IMREAD_GRAYSCALE)
    fourth = cv2.imread("video/3.PNG", cv2.IMREAD_GRAYSCALE)
    fifth = cv2.imread("video/4", cv2.IMREAD_GRAYSCALE)
    #cv2.imshow('first', first)
    #cv2.imshow('second', second)

    #cv2.waitKey(0)
    #cv2.destroyAllWindows()
    compare_images(first, second, "Compare1")
    compare_images(second, third, "Compare2")
    compare_images(third, fourth, "Compare3")
    compare_images(fourth, fifth, "Compare4")

if __name__ == '__main__':
    main()