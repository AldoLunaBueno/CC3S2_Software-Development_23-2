import unittest
from p3_platforme import *

# Probamos el programa con los inputs dados en la página donde está el problema
class Test(unittest.TestCase):
    def test1(self):
        input = '3\n1 5 10\n3 1 5\n5 3 7'
        expected = 14
        Test.assertEquals(self, platforme(input), expected)
    def test2(self):
        input = '5\n50 50 90\n40 40 80\n30 30 70\n20 20 60\n10 10 50'
        expected = 200
        Test.assertEquals(self, platforme(input), expected)


if __name__=='__main__':
    unittest.main()