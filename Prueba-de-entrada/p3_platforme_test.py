import unittest
from p3_platforme import *

class Test(unittest.TestCase):
    def test1(self):
        input = {
            'number': 3,
            'coordenates': [
                [1, 5, 10],
                [5, 3, 7],
                [3, 1, 5]
            ]
        }
        expected = 14
        Test.assertEquals(self, platforme(input), expected)
    def test2(self):
        input = {
            'number': 5,
            'coordenates': [
                [50, 50, 90],
                [40, 40, 80],
                [30, 30, 70],
                [20, 20, 60],
                [10, 10, 50]
            ]
        }
        expected = 200
        Test.assertEquals(self, platforme(input), expected)


if __name__=='__main__':
    unittest.main()