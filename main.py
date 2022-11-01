file = open("graph.in", "r")

Lines = file.readlines()

colors = {
    1: "blue",
    2: "red",
    3: "purple",
    4: "yellow",
    5: "green",
    6: "orange",
    7: "black",
}

old_s = 0
old_d = 0
overall_t = 0

nodes = 0
links = -1

f = open("graph.out", "w")
f.write("graph ER {\n" +
        "   fontname=\"Helvetica,Arial,sans-serif\"\n" +
        "   node [fontname=\"Helvetica,Arial,sans-serif\"]\n" +
        "   edge [fontname=\"Helvetica,Arial,sans-serif\"]\n" +
        "   layout=neato\n")
f.close()

f = open("graph.out", "a")

for line in Lines:
    s, d, t = line.split()
    s = int(s)
    d = int(d)
    t = int(t)
    nodes = max(nodes, s, d)
    if t == 3:
        t += 1

    if (old_d != d or old_s != s) and overall_t != 0:
        links += 1
        f.write("   " + str(old_s) + " -- " + str(old_d) + " [color=\"" + colors[overall_t] + "\"];\n")
        overall_t = 0
    overall_t += t
    old_s = s
    old_d = d
f.write("}")
f.close()
