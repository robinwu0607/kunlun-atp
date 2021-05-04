from libs import lib

log = lib.get_event_logger()


def main_sequencer():
    log.debug("welcome to main sequencer")
    uut = lib.conn.UUT
    # uut.close()
    lib.set_display1("SERIAL:123456")
    uut.open()
    # time.sleep(10)
    ans = lib.ask_question("问个问题：", timeout=60 * 3)
    lib.set_display2("UUTTYPE:03028888")
    lib.set_display3("STEP: CPU Test")
    log.debug(ans)
    #
    uut.send("dir\r", expect=">", timeout=10)

    uut.close()
    return
