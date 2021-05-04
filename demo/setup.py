from libs.utils import allocation

kun = allocation.Allocation()
station = kun.add_station("PCBFT")
station.add_container("UUT00")
station.add_container("UUT01", disabled=True)
station.add_configuration_data("terminal", "10.1.1.2")

station = kun.add_station("SYSFT")
station.add_container("UUT02")
station.add_container("UUT03", disabled=True)
station.add_configuration_data("terminal", "10.1.1.3")

station = kun.add_station("PCB2C")
station.add_pre_sequence("prod.main.pre_sequencer")
station.add_sequence_map("uuttype1", "prod.main.main_sequencer")
station.add_sequence_map("uuttype2", "dev.main.main_sequencer")
station.add_configuration_data("terminal", "10.1.1.4")
station.add_configuration_data("good", [1234, 5678])

sync_group = []
for i in range(5):
    container = station.add_container("UUT{:02}".format(i))
    container.add_connection(name="UUT", protocol="DUMMY", host="host1", user="user1", password="pswd1", port=22)
    container.add_connection(name="REF", protocol="SSH", host="host2", user="user2", password="pswd2", port=22)
    container.add_connection(name="SCPI", protocol="SERIAL", serial="USB0", user="user3", password="pswd3", port=22)
    if i == 0:
        container.add_pre_sequence("prod.xxxx.pre_sequencer")
        container.add_sequence_map("uuttype1", "prod.xxxx.main_sequencer")
        container.add_configuration_data("hello", "kitty")
    sync_group.append(container)

station.add_sync_group("group1", sync_group)
