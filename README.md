# Qubic Bezier Graph

A bezier curve is usually given as a parametrized CURVE (x(t), y(t)) for some parameter t. However, sometimes need a
bezier GRAPH, where y is a function of x, i.e. y = f(x). This implementation deals with this situation in
the case of a qubic bezier curve.

A qubic bezier curve is generated from points (a1,a2), (b1,b2), (c1,c2), (d1,d2) in the plane.
If a1 = a2 = d2 = 0 and 0 < b1 < c1 < d1 we can be sure, that the bezier curve is in fact a graph.
Given such 4 points, I have implemented a function "generatePoints" that calculates N points on the graph. 

I made this program for a friend of mine who is a composer. He needed a bezier graph to generate interesting
sound wawes for a synthezizer program.

Here is an illustration of the graph:
https://kimarokko.000webhostapp.com/kimarokko.com/bezier/bezier.html
