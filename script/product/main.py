from libs import lib

log = lib.get_event_logger()


def main_sequencer():
    log.debug("welcome to main sequencer")
    # uut = lib.get_uut(protocol="DUMMY")
    # uut.close()
    # uut.open()
    # time.sleep(10)
    ans = lib.ask_question("问个问题：", timeout=60 * 3)
    log.debug(ans)
    lib.set_display1("SERIAL:{}".format(ans))
    lib.set_display2("UUTTYPE:03028888")
    lib.set_display3("STEP: CPU Test")
    lib.add_test_data(sernum="1234567890", uuttype="123456-01", area="FT")
    lib.add_test_data(sernum="1234567890", uuttype="123456-01", area="FT")
    raise Exception("go to failure")
    # uut.send("dir\r", expect=">", timeout=10)
    # lib.start_container_test("FT:UUT01", override=True, queue=False)
    # uut.close()
    return
