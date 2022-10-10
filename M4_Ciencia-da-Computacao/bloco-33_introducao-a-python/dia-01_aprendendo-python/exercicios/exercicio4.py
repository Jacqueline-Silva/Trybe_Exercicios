LIST_NAMES = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(list_names):
    result = list_names[0]
    for name in list_names:
        if len(name) >= len(result):
            result = name
    return result


print(biggest_name(LIST_NAMES))
