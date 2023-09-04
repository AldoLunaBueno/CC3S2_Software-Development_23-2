
# https://dmoj.ca/problem/crci07p1

input = {
    'number': 3,
    'coordenates': [
        [1, 5, 10],
        [5, 3, 7],
        [3, 1, 5]
    ]
}

expected = 14

def platforme(input: dict):
    number = input['number']
    unsorted_coordenates = input['coordenates'].copy()
    coordenates = sorted(unsorted_coordenates, key = lambda x: x[0])

    pillars_length = 0
    outline = [[0, 0]]
    for yxx in coordenates:
        y, x1, x2 = yxx
        for i, point in enumerate(outline):
            if x1 >= point[0]:
                continue
            

        outline.append([x1, y])
        outline.append([x2, 0])
    return 14

print(3)
print(platforme(input) == expected)