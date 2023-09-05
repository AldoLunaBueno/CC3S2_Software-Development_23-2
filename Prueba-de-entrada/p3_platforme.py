
# https://dmoj.ca/problem/crci07p1

def platforme(inputStr):
    obtain_coordenates(inputStr)
    number = input['number']
    unsorted_coordenates = input['coordenates'].copy()
    coordenates = sorted(unsorted_coordenates, key = lambda x: x[0])

    pillars_length = 0
    outline = [[0, 0], [10001, 0]] # Contorno de las plataformas combinadas

    for yxx in coordenates:

        y, x1, x2 = yxx

        # Puntos que tendrán las alturas que nos interesan para calcular la suma de los dos pilares
        i1, i2 = 0, 0
        for i, point in enumerate(outline):
            if x1 >= point[0]:
                i1 = i
                continue
            break
        for i, point in enumerate(outline[i1:], i1):
            if x2 > point[0]:
                i2 = i
                continue
            break
        pillars_length += 2 * y - outline[i1][1] - outline[i2][1]

        # Colocamos la nueva plataforma y redefinimos el contorno

        if x1 > outline[i1][0]:
            if x2 < outline[i2+1][0]:
                y2 = outline[i2][1]
                del outline[i1+1:i2+1]
                outline.insert(i1+1, [x1, y])
                outline.insert(i1+2, [x2, y2])
            elif x2 == outline[i2+1][0]:
                del outline[i1+1:i2+1]
                outline.insert(i1+1, [x1, y])
        elif x1 == outline[i1][0]:
            if x2 < outline[i2+1][0]:
                y2 = outline[i2][1]
                del outline[i1:i2+1]
                outline.insert(i1, [x1, y])
                outline.insert(i1+1, [x2, y2])
            elif x2 == outline[i2+1][0]:
                del outline[i1:i2+1]
                outline.insert(i1, [x1, y])

    return pillars_length
def obtain_coordenates(str):
    ''.split()
    lines = [line for line in str.split('\n')]
    n = l[0]
    for line in lines:
        int(line.split(' '))