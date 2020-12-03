# Qubic Bezier Graph

A Bezier curve is usually given as a parametrized CURVE (x(t), y(t)) where t is a real paramter in the interval [0,1]. However, sometimes need a bezier GRAPH, where y is a function of x, i.e. y = f(x). This implementation deals with this situation in the case of a qubic bezier curve.

A qubic Bezier curve is generated from points (a1,a2), (b1,b2), (c1,c2), (d1,d2) in the plane.
If a1 = a2 = d2 = 0 and 0 < b1 < c1 < d1 we can be sure, that the Bezier curve is in fact a graph.
Given such 4 points, I have implemented a function "generatePoints" that calculates N points on the graph.

The algorithm goes like this:
Given an x between 0 and d2, we solve the eqution x(t) = x to find the parameter value t, that corresponds to x.
x(t) - x is a 3rd degree polynomial, which we solve using Cardano's formula. It might have both real and complex roots, but we are only interested in the real root t in the interval [0, 1]. Once we've found t, its easy to compute y(t).

I made this program for a friend of mine who is a composer. He needed Bezier graphs to generate interesting
sound waves for a synthezizer program.

I made a simple online illustration of the program:
https://kimarokko.000webhostapp.com/kimarokko.com/bezier/bezier.html
