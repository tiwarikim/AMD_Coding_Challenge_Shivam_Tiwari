import json


# give output superherosbyCity
def ConvertJSON(str):
    data = json.loads(str)
    print(data)
    data['superherosbyCity'] = []

    # add all available city names in data
    for i in data['superheros']:
        # check if heroname is present in superherosbycity
        if any(i['city'] in city for city in data['superherosbyCity']):
            # print(i['city'])
            pass
        # add hero detail in superherosbycity
        else:
            data['superherosbyCity'].append({i['city']: []})

    # add name of superhero to corresponding city
    for i in data['superheros']:
        for c in data['superherosbyCity']:
            # if city name available in superherosbycity
            if i['city'] in c:
                # add city name
                c[i['city']].append(i['name'])
                break

    # remove redundancy
    data.pop('superheros')

    return data


def main():
    JSON_obj_str = '{"superheros": [{ "name" : "batman", "id":1, "city":"gotham"},{ "name" : "spiderman", "id":2, ' \
                   '"city":"NYC"},{ "name" : "superman", "id":2, "city":"NYC"}]} '

    OUTPUT = ConvertJSON(JSON_obj_str)

    print(OUTPUT)


if __name__ == "__main__":
    main()
